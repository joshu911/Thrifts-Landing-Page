'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import applyMerchantContent from '@/content/apply-merchant.json';

export default function MerchantApplicationPage() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shopUrl: '',
    gmv: '',
    categories: '',
    fulfillment: [] as string[],
    message: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (option: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      fulfillment: checked
        ? [...prev.fulfillment, option]
        : prev.fulfillment.filter((item) => item !== option),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit to backend
    console.log('Merchant application submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {applyMerchantContent.success.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {applyMerchantContent.success.body}
              </p>
              <Button
                onClick={() => router.push('/')}
                variant="outline"
                className="border-orange-200 hover:border-orange-300 hover:bg-orange-50 dark:border-orange-800 dark:hover:bg-orange-900/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to homepage
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {applyMerchantContent.hero.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {applyMerchantContent.hero.subtitle}
          </p>
        </div>

        <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl mb-8">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Eligibility requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {applyMerchantContent.eligibility.map((requirement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {requirement}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              Application form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {applyMerchantContent.form.fields.map((field) => {
                if (field.type === 'select') {
                  return (
                    <div key={field.id}>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {field.label}
                      </label>
                      <select
                        value={
                          formData[field.id as keyof typeof formData] as string
                        }
                        onChange={(e) =>
                          handleInputChange(field.id, e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select an option</option>
                        {field.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                }

                if (field.type === 'checkboxes') {
                  return (
                    <div key={field.id}>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        {field.label}
                      </label>
                      <div className="space-y-2">
                        {field.options?.map((option) => (
                          <label
                            key={option}
                            className="flex items-center gap-3"
                          >
                            <input
                              type="checkbox"
                              checked={formData.fulfillment.includes(option)}
                              onChange={(e) =>
                                handleCheckboxChange(option, e.target.checked)
                              }
                              className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                            />
                            <span className="text-gray-700 dark:text-gray-300">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (field.type === 'textarea') {
                  return (
                    <div key={field.id}>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {field.label}
                      </label>
                      <Textarea
                        placeholder={field.placeholder}
                        value={
                          formData[field.id as keyof typeof formData] as string
                        }
                        onChange={(e) =>
                          handleInputChange(field.id, e.target.value)
                        }
                        className="min-h-[100px] border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                      {field.help && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {field.help}
                        </p>
                      )}
                    </div>
                  );
                }

                return (
                  <div key={field.id}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {field.label}
                    </label>
                    <Input
                      type={field.id === 'email' ? 'email' : 'text'}
                      placeholder={field.placeholder}
                      value={
                        formData[field.id as keyof typeof formData] as string
                      }
                      onChange={(e) =>
                        handleInputChange(field.id, e.target.value)
                      }
                      className="border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                    {field.help && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {field.help}
                      </p>
                    )}
                  </div>
                );
              })}

              <div className="pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl"
                >
                  {applyMerchantContent.form.submitLabel}
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">
                  {applyMerchantContent.form.privacyNote}
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
