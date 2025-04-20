import { useState } from "react";

// UTILS
import { cn } from "src/lib/utils";

// SHADCN COMPONENTS
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Button } from "src/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "src/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "src/components/ui/popover";

// ICONS
import { Check, ChevronsUpDown } from "lucide-react";

type Profile = { id: string; label: string };

const ProfileSwitcher = () => {
  const profiles: Profile[] = [
    { id: "0", label: "Rutmar Silde" },
    { id: "1", label: "Ketly Iouriev" },
  ];

  const [open, setOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile>(profiles[0]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a profile"
          className="w-[240px] justify-between"
          size="lg"
        >
          <Avatar className="mr-2 h-5 w-5">
            <AvatarImage src="/assets/profile-image.png" alt="profile image" className="grayscale" />
            <AvatarFallback>
              {selectedProfile.label
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          {selectedProfile.label}
          <ChevronsUpDown className="ml-auto opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0">
        <Command>
          <CommandInput placeholder="Search profile..." className="outline-none ml-3" />
          <CommandList>
            <CommandEmpty>No profile found.</CommandEmpty>
            <CommandGroup>
              {profiles.map((profile) => (
                <CommandItem
                  key={profile.id}
                  onSelect={() => {
                    setSelectedProfile(profile);
                    setOpen(false);
                  }}
                  className="text-sm cursor-pointer"
                >
                  <Avatar className="mr-2 h-5 w-5">
                    <AvatarImage src="/assets/profile-image.png" alt="profile image" className="grayscale" />
                    <AvatarFallback>
                      {profile.label
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {profile.label}
                  <Check className={cn("ml-auto", selectedProfile.id === profile.id ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileSwitcher;
