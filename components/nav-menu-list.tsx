// "use client";

// import { useClerk, useUser } from "@clerk/nextjs";
// import { Link } from "@nextui-org/react";
// import { usePathname } from "next/navigation";

// export const NavMenuList = ({ ...menuProps }: { [key: string]: any }) => {
//   const pathname = usePathname();
//   const { isSignedIn, isLoaded } = useUser();
//   const { openSignIn } = useClerk();

//   const menuItems = [
//     { label: "Home", href: "/" },
//     { label: "Generate", href: "/generate" },
//     { label: "My Flashcards", href: "/flashcards" },
//     { label: "Upload PDF", href: "/uploadpdf"},
//   ];

//   return (
//     <>
//       {menuItems.map((item, index) => (
//         <>
//           <Link
//             key={index}
//             color={item.href === pathname ? "secondary" : "foreground"}
//             href={isSignedIn ? item.href : "#"}
//             isDisabled={!isLoaded}
//             {...menuProps}
//             {...(!isSignedIn &&
//               item.href !== "/" && { onClick: () => openSignIn() })}
//           >
//             {item.label}
//           </Link>
//         </>
//       ))}
//     </>
//   );
// };

"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export const NavMenuList = ({ ...menuProps }: { [key: string]: any }) => {
  const pathname = usePathname();
  const { isSignedIn, isLoaded } = useUser();
  const { openSignIn } = useClerk();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Generate", href: "/generate" },
    { label: "My Learning Cards", href: "/flashcards" },
    // { label: "Kannada FlashCards", href: "http://localhost:4000/", external: true },
  ];

  return (
    <>
      {menuItems.map((item, index) => {
        const isDisabled = !isLoaded || (!isSignedIn && item.href !== "/");

        return (
          <Link
            key={index}
            color={item.href === pathname ? "secondary" : "foreground"}
            href={isSignedIn ? item.href : "#"}
            isDisabled={isDisabled}
            isExternal={item.external}
            {...menuProps}
            {...(!isSignedIn &&
              item.href !== "/" && { onClick: () => openSignIn() })}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
};

