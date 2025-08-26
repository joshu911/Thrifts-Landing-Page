'use client';

import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import {
  trackPartnersTabSelected,
  trackPartnersLeadSubmitted,
} from '@/lib/analytics';

interface FormField {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  options?: string[];
}

interface TabForm {
  title: string;
  fields: FormField[];
  submitLabel: string;
}

interface TabContent {
  id: 'merchant' | 'external';
  label: string;
  intro: string;
  kpiBullets?: string[];
  thesisBullets?: string[];
  form: TabForm;
}

interface PartnersTabsProps {
  tabs: TabContent[];
  complianceNote: string;
}

export default function PartnersTabs({
  tabs,
  complianceNote,
}: PartnersTabsProps) {
  // Removed unused activeTab
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit =
    (tabId: 'merchant' | 'external') => (e: React.FormEvent) => {
      e.preventDefault();
      trackPartnersLeadSubmitted(tabId);
      setSubmitted(tabId);
    };

  return (
    <Tabs.Root
      defaultValue={tabs[0].id}
      onValueChange={(value: string) => {
        trackPartnersTabSelected(value as 'merchant' | 'external');
      }}
    >
      <Tabs.List className="flex space-x-1 border-b border-gray-200 mb-8">
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.id}
            value={tab.id}
            className="px-6 py-3 text-textMuted hover:text-text data-[state=active]:text-text data-[state=active]:border-b-2 data-[state=active]:border-brand focus-ring rounded-none"
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {tabs.map((tab) => (
        <Tabs.Content
          key={tab.id}
          value={tab.id}
          className="focus:outline-none"
        >
          {submitted === tab.id ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8"
            >
              <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
              <p className="text-textMuted">
                We&apos;ll review your information and get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="max-w-2xl mx-auto">
                <p className="text-lg mb-6">{tab.intro}</p>

                {/* Bullets */}
                {(tab.kpiBullets || tab.thesisBullets) && (
                  <ul className="space-y-2 mb-8">
                    {(tab.kpiBullets || tab.thesisBullets)?.map((bullet) => (
                      <li key={bullet} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Form */}
                <div className="card">
                  <h3 className="text-xl font-semibold mb-6">
                    {tab.form.title}
                  </h3>
                  <form onSubmit={handleSubmit(tab.id)} className="space-y-4">
                    {tab.form.fields.map((field) => (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="block text-sm font-medium mb-1"
                        >
                          {field.label}
                        </label>
                        {field.type === 'select' ? (
                          <select
                            id={field.id}
                            name={field.id}
                            required
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-ring"
                          >
                            <option value="">Select...</option>
                            {field.options?.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : field.type === 'textarea' ? (
                          <textarea
                            id={field.id}
                            name={field.id}
                            required
                            placeholder={field.placeholder}
                            rows={4}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-ring"
                          />
                        ) : (
                          <input
                            type="text"
                            id={field.id}
                            name={field.id}
                            required
                            placeholder={field.placeholder}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-ring"
                          />
                        )}
                      </div>
                    ))}
                    <button type="submit" className="btn-brand w-full">
                      {tab.form.submitLabel}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </Tabs.Content>
      ))}

      <p className="text-sm text-textMuted text-center mt-8 max-w-2xl mx-auto">
        {complianceNote}
      </p>
    </Tabs.Root>
  );
}
