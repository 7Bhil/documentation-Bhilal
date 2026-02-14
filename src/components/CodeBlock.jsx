import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeBlock = ({ code, language = "bhilal", title = "exemple.bh" }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlight = (text) => {
    const rules = [
      { regex: /\b(classe|fonction|soit|si|sinon|tantque|renvoie|nouveau|prive|public|abstrait|interface|inclure|essaye|attrape|lance|herite)\b/g, cls: 'text-bhilal-accent font-bold italic' },
      { regex: /\b(montre|entre|longueur|aleatoire|min|max|croissant|decroissant|date|execute|lire|ecrire)\b/g, cls: 'text-purple-400' },
      { regex: /("[^"]*")/g, cls: 'text-emerald-400' },
      { regex: /(\b[0-9]+\b)/g, cls: 'text-amber-400' },
      { regex: /(#.*)/g, cls: 'text-slate-600 italic font-light' },
    ];

    let html = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    const allRegex = new RegExp(rules.map(r => `(${r.regex.source})`).join('|'), 'g');
    
    html = html.replace(allRegex, (match) => {
      for (const rule of rules) {
        if (rule.regex.test(match)) {
          return `<span class="${rule.cls}">${match}</span>`;
        }
      }
      return match;
    });

    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <div className="glass p-1 rounded-3xl overflow-hidden border-white/5 bg-bhilal-dark/40 shadow-2xl group/code">
      <div className="px-6 py-3 bg-white/[0.03] flex justify-between items-center border-b border-white/5">
        <div className="flex gap-2">
           <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
           <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
           <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
           <span className="ml-3 text-[10px] text-slate-500 font-mono tracking-widest uppercase">{title}</span>
        </div>
        <button onClick={copyToClipboard} className="text-slate-500 hover:text-white transition-colors p-1 rounded-md hover:bg-white/5">
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
        </button>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre scrollbar-hide">
        {highlight(code)}
      </div>
    </div>
  );
};

export default CodeBlock;
