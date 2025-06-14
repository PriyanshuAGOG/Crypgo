import Link from "next/link";
import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";

const NotFound = () => {
  return (
    <section className="bg-darkmode py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <div className="mx-auto mb-10 text-center">
                <Image
                  src={`${getImagePrefix()}/images/404.svg`}
                  alt="404"
                  width={400}
                  height={300}
                  className="mx-auto dark:hidden"
                />
                <Image
                  src={`${getImagePrefix()}/images/404-dark.svg`}
                  alt="404"
                  width={400}
                  height={300}
                  className="mx-auto hidden dark:block"
                />
              </div>
              <h3 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
                Sorry, the page can't be found
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color">
                The page you were looking for appears to have been moved,
                deleted or does not exist.
              </p>
              <Link
                href="/"
                className="inline-block rounded-lg border border-primary bg-primary px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-opacity-90"
              >
                Go To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;