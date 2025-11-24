"use client";

import { Button } from "@/components/ui/button";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { GB, FR } from 'country-flag-icons/react/3x2';


export function LanguageSelector() {
    const changeLocale = useChangeLocale()
    const language = useCurrentLocale()

    if (language == "en") {
        return (
            <Button onClick={() => changeLocale('fr')} variant="ghost" size="sm" className="h-8 w-8 px-0">
                <GB title="English" style={{ width: '50px', height: 'auto' }} />
                <span className="sr-only">Change Language</span>
            </Button>
        );
    }
    else if (language == "fr") {
        return (
            <Button onClick={() => changeLocale('en')} variant="ghost" size="sm" className="h-8 w-8 px-0">
                <FR title="Français" style={{ width: '50px', height: 'auto' }} />
                <span className="sr-only">Change Language</span>
            </Button>
        );
    }

}
