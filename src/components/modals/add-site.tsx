import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import MultiSelect from "../ui/multiselect";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { PlusCircle } from "lucide-react";

const AddSite = () => {
  const forms = [
    {
      id: 1,
      name: "Site Information",
      fields: ["type", "languages", "name", "managedBy", "domain"],
    },
    {
      id: 2,
      name: "Site Theme",
      fields: ["color1", "color2", "color3", "color4", "supportNumber"],
    },
    {
      id: 3,
      name: "Site SEO",
      fields: [
        "metaTitle",
        "metaKeywords",
        "pageURL",
        "ogTitle",
        "pageTitle",
        "logoAlt",
        "ogURL",
        "metaCountry",
        "metaLanguage",
        "ogImage",
        "logo",
        "metaDescription",
      ],
    },
    {
      id: 4,
      name: "Site Menu",
      fields: [
        "link1",
        "link2",
        "link3",
        "link4",
        "link5",
        "link6",
        "link7",
        "button",
      ],
    },
    {
      id: 5,
      name: "Complete",
    },
  ];
  const langs = [
    {
      value: "1",
      label: "English",
    },
    {
      value: "2",
      label: "Russian",
    },
    {
      value: "3",
      label: "Arabic",
    },
    {
      value: "4",
      label: "French",
    },
  ];
  const [languages, setLanguages] = useState<string[]>([]);

  console.log(forms, languages);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="default"
          className="flex items-center justify-center space-x-3 place-self-end"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a New Site</DialogTitle>
          <DialogDescription>
            Add a New Site to your Arsenal. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <MultiSelect title="Language" options={langs} filters={languages} setFilters={setLanguages} />
        {/* Steps */}
        {/* Multi-step Form */}
        {/* Site Info */}
        {/* Site Theme */}
        {/* Site SEO */}
        {/* Site Menu */}
        {/* Navigation */}
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddSite;
