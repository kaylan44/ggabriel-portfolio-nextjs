import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "../common/animated-section";
import profileImg from "@/public/profile-img.jpg";
import { getI18n } from "@/locales/server";

export default async function ResumeCard() {
  // Translation
  const i18n = await getI18n()

  return (
    <AnimatedSection>
      <div className="w-full p-4 sm:p-6 bg-background border border-border rounded-lg transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
              <Image
                src={profileImg}
                alt="Profile picture"
                width={64}
                height={64}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-muted-foreground">
                  Guillaume Gabriel
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                {i18n('resume.jobTitle')}
              </p>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {i18n('resume.informations')}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="rounded-lg w-full sm:w-auto"
            asChild
          >
            <Link href="/resume.pdf" rel="noopener noreferrer" target="_blank">
              {i18n('resume.download')}
              <Icons.download className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
