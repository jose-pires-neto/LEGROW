"use client";

import React, { useState } from "react";
import { Code, Eye, Check, Copy } from "lucide-react";
import { ComponentItem } from "../registry";

export function ComponentCard({ component }: { component: ComponentItem }) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(component.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0a0a0a] shadow-sm">
      {/* Header / Tabs */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
        <h3 className="font-bold text-gray-900 dark:text-white">{component.name}</h3>
        
        <div className="flex items-center bg-gray-200/50 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("preview")}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeTab === "preview" 
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm" 
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeTab === "code" 
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm" 
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            Código
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative">
        {activeTab === "preview" ? (
          <div className="w-full min-h-[300px] flex items-center justify-center p-4 md:p-8 bg-grid-gray-100 dark:bg-grid-gray-900/50">
            {/* O preview precisa ser envolto em uma div com largura 100% para não quebrar componentes largos */}
            <div className="w-full max-w-full overflow-hidden">
               {component.preview}
            </div>
          </div>
        ) : (
          <div className="relative group">
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-medium"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copiado!" : "Copiar"}
            </button>
            <div className="p-4 md:p-6 bg-gray-950 text-gray-300 overflow-x-auto min-h-[300px] text-sm">
              <pre>
                <code>{component.code}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
