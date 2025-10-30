"use client";

import React from "react";
import { useTranslations } from "next-intl";

const PoliticaPage = () => {
  const t = useTranslations("privacyPolicy");
  const sections = t.raw("sections") as {
    heading: string;
    content: string;
    list?: string[];
  }[];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>

      <p className="text-neutral-700 mb-6">{t("intro")}</p>

      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold mb-3 mt-8">
            {section.heading}
          </h2>
          <p className="text-neutral-700 mb-4">{section.content}</p>

          {section.list && section.list.length > 0 && (
            <ul className="list-disc ml-6 text-neutral-700 space-y-1">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <p className="text-neutral-500 text-sm mt-8">{t("lastUpdated")}</p>
    </section>
  );
};

export default PoliticaPage;
