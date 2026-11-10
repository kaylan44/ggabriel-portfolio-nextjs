import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "LinkedIn",
    username: "Guillaume Gabriel",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/g-gabriel/",
  },
  {
    name: "Gmail",
    username: "guillaume.gabriel.it@gmail.com",
    icon: Icons.gmail,
    link: "mailto:guillaume.gabriel.it@gmail.com",
  },
  {
    name: "Whatsapp",
    username: "guillaume.gabriel.it@gmail.com",
    icon: Icons.whatsapp,
    link: "https://wa.me/33605036839",
  }
];
