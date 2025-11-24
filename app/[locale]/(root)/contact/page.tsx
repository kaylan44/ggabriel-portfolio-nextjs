import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { ContactForm } from "@/components/forms/contact-form";
import { getPagesConfig } from "@/config/pages";
import { pagesConfigMetadata } from "@/config/page-metadata";


export const metadata: Metadata = {
  title: pagesConfigMetadata.contact.metadata.title,
  description: pagesConfigMetadata.contact.metadata.description,
};

export default async function ContactPage() {
  const pagesConfig = await getPagesConfig();

  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </PageContainer>
  );
}
