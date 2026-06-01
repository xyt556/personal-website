import type { ContactInfo } from '../../../store/siteData';

interface Props {
  contact: ContactInfo;
  onChange: (contact: ContactInfo) => void;
}

export default function ContactEditor({ contact, onChange }: Props) {
  const update = (field: keyof ContactInfo, value: string) => {
    onChange({ ...contact, [field]: value });
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5">
        <h3 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-3">
          📬 联系方式
        </h3>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">邮箱地址</label>
          <input
            type="email"
            value={contact.email}
            onChange={(e) => update('email', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">所在地</label>
          <input
            type="text"
            value={contact.location}
            onChange={(e) => update('location', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">工作时间</label>
          <input
            type="text"
            value={contact.workingHours}
            onChange={(e) => update('workingHours', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>
      </div>
    </div>
  );
}
