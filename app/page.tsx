import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import { Button, Link, LinkIcon } from "@nextui-org/react";
import { BookMarked, CloudUpload, Sparkles, WandSparkles } from "lucide-react";

const features = [
  {
    icon: <WandSparkles />,
    title: "AI-Generated Learning Cards",
    description:
      "Instantly create Learning Cards from your text using advanced AI technology.",
  },
  {
    icon: <BookMarked />,
    title: "Save and Revisit",
    description:
      "Easily save your Learning Cards and access them anytime for quick review.",
  },
  // {
  //   icon: <CloudUpload />,
  //   title: "Cloud Sync",
  //   description: "Access your flashcards from any device, anytime, anywhere.",
  // },
];

export default function Home() {
  return (
    <>
      <section id="home" className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold xl:mx-48 tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Master Concepts with AI Learning Cards
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Study less, remember more — unlock your potential with AI Learning Cards
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <ClerkLoading>
              <Button
                color="secondary"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg"
                isLoading
              >
                Get Started
              </Button>
              <Button
                variant="ghost"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg"
                isLoading
              >
                Learn More
              </Button>
            </ClerkLoading>
            <ClerkLoaded>
              <SignedIn>
                <Button
                  color="secondary"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg"
                  as={Link}
                  href="/generate"
                >
                  Generate Learning Cards
                </Button>
              </SignedIn>
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button
                    color="secondary"
                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg"
                  >
                    Get Started
                  </Button>
                </SignUpButton>
              </SignedOut>
              <Button
                variant="ghost"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg"
                as={Link}
                href="#features"
              >
                Learn More
              </Button>
            </ClerkLoaded>
          </div>
        </div>
      </section>
      {/* <section id="features" className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto flex flex-col justify-center items-center w-full text-center lg:py-16 lg:px-12">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              Key Features of AI Flashcards App
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Our app is designed to enhance your learning experience through
              innovative features that make studying more efficient and
              enjoyable.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 max-w-screen-lg">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center "
              >
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section id="features" className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto flex flex-col justify-center items-center w-full text-center lg:py-16 lg:px-12">
    <div className="max-w-screen-md mb-8 lg:mb-16">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
        Key Features of AI Learning Cards App
      </h2>
      <p className="text-gray-500 sm:text-xl dark:text-gray-400">
        My app is designed to enhance your learning experience through
        innovative features that make studying more efficient and enjoyable.
      </p>
    </div>
    <div className="grid gap-12 md:grid-cols-2 max-w-2xl w-full mx-auto">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center text-center"
        >
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300">
            {feature.icon}
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">
            {feature.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      <section id="cta" className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              Ready to Revolutionize Your Study Sessions?
            </h2> */}
            {/* <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Join thousands of students and professionals who are enhancing
              their learning with ai-flashcards. Get started today and
              experience the future of studying!
            </p> */}
            <ClerkLoading>
              <Button
                color="secondary"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg"
                isLoading
              >
                Get Started
              </Button>
            </ClerkLoading>
            <ClerkLoaded>
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button
                    color="secondary"
                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg"
                  >
                    Get Started Now
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button
                  color="secondary"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg"
                  as={Link}
                  href="/generate"
                >
                  Generate Learning Cards
                </Button>
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </section>
    </>
  );
}
