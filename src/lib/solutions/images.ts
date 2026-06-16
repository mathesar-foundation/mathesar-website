import type { Picture } from "vite-imagetools";
import type { SolutionId } from "$lib/solutions/ids";

import BikeShopIllustration from "/src/assets/illustrations/bike-shop.png?w=320;640;960&format=avif;webp;jpeg&enhanced";
import HardwareShopIllustration from "/src/assets/illustrations/hardware-shop.png?w=320;640;960&format=avif;webp;jpeg&enhanced";
import IceCreamDistributorIllustration from "/src/assets/illustrations/ice-cream-distributor.png?w=320;640;960&format=avif;webp;jpeg&enhanced";
import MakerspaceIllustration from "/src/assets/illustrations/library-makerspace.png?w=320;640;960&format=avif;webp;jpeg&enhanced";
import MuseumIllustration from "/src/assets/illustrations/museum-exhibit.png?w=320;640;960&format=avif;webp;jpeg&enhanced";
import NonprofitIllustration from "/src/assets/illustrations/non-profit-grant.png?w=320;640;960&format=avif;webp;jpeg&enhanced";

import BikeShopPrimary from "/src/assets/solutions/bike-shop/primary-table-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import BikeShopStep1 from "/src/assets/solutions/bike-shop/step-1-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import BikeShopStep2 from "/src/assets/solutions/bike-shop/step-2-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import BikeShopStep3 from "/src/assets/solutions/bike-shop/step-3-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import BikeShopStep4 from "/src/assets/solutions/bike-shop/step-4-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import HardwareStorePrimary from "/src/assets/solutions/hardware-store-chain/primary-table-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import HardwareStoreStep1 from "/src/assets/solutions/hardware-store-chain/step-1-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import HardwareStoreStep2 from "/src/assets/solutions/hardware-store-chain/step-2-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import IceCreamDistributorPrimary from "/src/assets/solutions/ice-cream-distributor/primary-table-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import IceCreamDistributorStep1 from "/src/assets/solutions/ice-cream-distributor/step-1-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import IceCreamDistributorStep2 from "/src/assets/solutions/ice-cream-distributor/step-2-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import MakerspacePrimary from "/src/assets/solutions/makerspace/primary-table-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import MakerspaceStep1 from "/src/assets/solutions/makerspace/step-1-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import MakerspaceStep2 from "/src/assets/solutions/makerspace/step-2-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import MuseumPrimary from "/src/assets/solutions/museum/primary-table-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import MuseumStep1 from "/src/assets/solutions/museum/step-1-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import MuseumStep2 from "/src/assets/solutions/museum/step-2-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import NonprofitPrimary from "/src/assets/solutions/nonprofit/primary-table-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import NonprofitStep1 from "/src/assets/solutions/nonprofit/step-1-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";
import NonprofitStep2 from "/src/assets/solutions/nonprofit/step-2-light.png?w=800;1200;1600&format=avif;webp;jpeg&enhanced";

export type SolutionImageSet = {
  listingIllustration: Picture;
  listingIllustrationAlt: string;
  primary: Picture;
  screenshots: readonly Picture[];
};

export const solutionImages = {
  "hardware-store-chain": {
    listingIllustration: HardwareShopIllustration,
    listingIllustrationAlt: "Hardware shop illustration",
    primary: HardwareStorePrimary,
    screenshots: [HardwareStoreStep1, HardwareStoreStep2],
  },
  museum: {
    listingIllustration: MuseumIllustration,
    listingIllustrationAlt: "Museum exhibit illustration",
    primary: MuseumPrimary,
    screenshots: [MuseumStep1, MuseumStep2],
  },
  "bike-shop": {
    listingIllustration: BikeShopIllustration,
    listingIllustrationAlt: "Bike shop illustration",
    primary: BikeShopPrimary,
    screenshots: [BikeShopStep1, BikeShopStep2, BikeShopStep3, BikeShopStep4],
  },
  makerspace: {
    listingIllustration: MakerspaceIllustration,
    listingIllustrationAlt: "Library makerspace illustration",
    primary: MakerspacePrimary,
    screenshots: [MakerspaceStep1, MakerspaceStep2],
  },
  nonprofit: {
    listingIllustration: NonprofitIllustration,
    listingIllustrationAlt: "Library makerspace illustration",
    primary: NonprofitPrimary,
    screenshots: [NonprofitStep1, NonprofitStep2],
  },
  "ice-cream-distributor": {
    listingIllustration: IceCreamDistributorIllustration,
    listingIllustrationAlt: "Ice cream distributor illustration",
    primary: IceCreamDistributorPrimary,
    screenshots: [IceCreamDistributorStep1, IceCreamDistributorStep2],
  },
} as const satisfies Record<SolutionId, SolutionImageSet>;

export function getSolutionImages(id: SolutionId): SolutionImageSet {
  return solutionImages[id];
}
