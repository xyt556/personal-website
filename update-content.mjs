import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonFilePath = path.join(__dirname, 'site-data.json');
const tsFilePath = path.join(__dirname, 'src', 'store', 'siteData.ts');

console.log('🚀 开始更新网站内容...\n');

if (!fs.existsSync(jsonFilePath)) {
  console.error('❌ 错误: 找不到 site-data.json 文件');
  console.log('\n📋 使用说明:');
  console.log('1. 在管理后台编辑内容');
  console.log('2. 点击右上角"导出配置"按钮');
  console.log('3. 将下载的 site-data.json 文件放在项目根目录');
  console.log('4. 重新运行此脚本\n');
  process.exit(1);
}

try {
  const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
  
  console.log('✅ 成功读取配置文件');
  
  const tsContent = fs.readFileSync(tsFilePath, 'utf-8');
  
  const startMarker = '// ============ Default Values ============';
  const endMarker = '// ============ Admin password';
  
  const startIndex = tsContent.indexOf(startMarker);
  const endIndex = tsContent.indexOf(endMarker);
  
  if (startIndex === -1 || endIndex === -1) {
    console.error('❌ 错误: 无法在 siteData.ts 中找到标记');
    process.exit(1);
  }
  
  function formatAsTs(obj, indent = 2) {
    const spaces = ' '.repeat(indent);
    const entries = Object.entries(obj);
    
    if (entries.length === 0) {
      return '{}';
    }
    
    let result = '{\n';
    
    for (const [key, value] of entries) {
      result += spaces;
      
      if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)) {
        result += key;
      } else {
        result += `'${key}'`;
      }
      
      result += ': ';
      
      if (value === null) {
        result += 'null';
      } else if (typeof value === 'string') {
        result += `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')}'`;
      } else if (typeof value === 'number') {
        result += value;
      } else if (typeof value === 'boolean') {
        result += value;
      } else if (Array.isArray(value)) {
        if (value.length === 0) {
          result += '[]';
        } else {
          result += '[\n';
          for (const item of value) {
            result += spaces + '  ' + formatAsTs(item, indent + 4) + ',\n';
          }
          result += spaces + ']';
        }
      } else if (typeof value === 'object') {
        result += formatAsTs(value, indent + 2);
      } else {
        result += String(value);
      }
      
      result += ',\n';
    }
    
    result += ' '.repeat(indent - 2) + '}';
    return result;
  }
  
  const formattedData = formatAsTs(jsonData);
  
  const newDefaultSiteData = `export const defaultSiteData: SiteData = ${formattedData};`;
  
  const newTsContent = 
    tsContent.substring(0, startIndex + startMarker.length) +
    '\n\n' +
    newDefaultSiteData +
    '\n\n' +
    tsContent.substring(endIndex);
  
  fs.writeFileSync(tsFilePath, newTsContent, 'utf-8');
  
  console.log('✅ 成功更新 src/store/siteData.ts\n');
  
  console.log('📝 下一步操作:');
  console.log('   方式一（手动）:');
  console.log('   1. npm run dev        # 预览更改');
  console.log('   2. git add .');
  console.log('   3. git commit -m "更新网站内容"');
  console.log('   4. git push');
  console.log('\n   方式二（自动）:');
  console.log('   双击运行 deploy-update.bat');
  
} catch (error) {
  console.error('❌ 错误:', error.message);
  process.exit(1);
}
