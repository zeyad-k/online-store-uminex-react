import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { currencyAtom } from "apps/front-office/design-system/atoms/currency-atom";
import { wishlistAtom } from "apps/front-office/design-system/atoms/wishlist-atom";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { formatPrice } from "apps/front-office/design-system/lib/formats";
import { FiX } from "react-icons/fi";

const WishlistItem = ({ wishlistItem, changeStatus }: any) => {
  const currentLanguage = current("localeCode");
  const currentCurrency = currencyAtom.useValue()
  const DeleteItem = () => {
    changeStatus();
    wishlistAtom.deleteItem(wishlistItem.id);
  };

  return (
    <div className="flex items-start justify-between gap-3 relative w-full">
      <div className="min-w-20 h-20 relative">
        <img
          src={wishlistItem.images[0].url}
          alt={wishlistItem.slug}
          className="w-full h-full"
        />
      </div>
      <div className="flex items-start flex-col gap-1">
        <h1 className="text-black text-sm font-medium">
          {trans(
            wishlistItem.name.find(name => name.localeCode === currentLanguage)
              ?.value || "",
          )}
        </h1>
        <h2 className="text-blue text-sm font-medium">
          {formatPrice(wishlistItem.price , currentCurrency)}
        </h2>
      </div>
      <Button className="" variant={"ghost"} onClick={DeleteItem}>
        <FiX className="w-4 h-4 text-red" />
      </Button>
    </div>
  );
};

export default WishlistItem;
