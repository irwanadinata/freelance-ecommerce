import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SearchIcon from "@/assets/icons/search-icon";

export function SearchInput() {
  return (
    <div className="flex w-96">
      <Input
        className="border-black focus-visible:ring-0 focus-visible:ring-offset-0 rounded-e-none"
        type="text"
      />
      <Button
        variant="outline"
        className="border-black w-14 rounded-s-none border-s-0"
        type="submit"
        size="icon"
      >
        <SearchIcon />
      </Button>
    </div>
  );
}
