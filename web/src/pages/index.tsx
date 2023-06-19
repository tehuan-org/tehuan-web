import { GetServerSideProps, type NextPage } from "next";
import tw, { css } from "twin.macro";
import { seoAtom, useSeo } from "~/hooks/seo";
import CirclesBanner from "~/components/misc/CirclesBanner";

interface Props {}

const Home: NextPage<Props> = ({}) => {
  useSeo({
    title: "Tehuan",
    description:
      "Sociedad enfocada al desarrollo de proyectos con caracter social",
    openGraph: {
      title: "Tehuan",
      type: "Website",
      url: "tehuan.org",
      images: [
        {
          url: `/preview.jpg`,
          width: 500,
          alt: "Tehuan Preview",
        },
      ],
    },
  });

  return (
    <div tw=" ">
      <CirclesBanner />
      <div tw=" w-full h-screen flex justify-center items-center relative ">
        <div tw=" flex flex-col text-center gap-2 ">
          <span
            tw=" text-7xl font-bold text-white text-opacity-80"
            css={[
              css`
                filter: drop-shadow(0px 0px 4px white)
                  drop-shadow(0px 0px 20px black);
              `,
            ]}
          >
            Tehuan
          </span>
          <span tw=" text-3xl font-bold text-white text-opacity-90 filter drop-shadow-xl">
            En construcción 🚧
          </span>
        </div>
      </div>
      <div tw=" h-screen w-full p-10 flex flex-col">
        <div tw=" h-full w-full flex flex-col items-center justify-center ">
          <div tw=" p-8 py-10 backdrop-blur-lg rounded-lg flex flex-col gap-10 w-full max-w-2xl items-center transition-all duration-1000 hover:backdrop-blur-2xl mt-auto">
            <p tw=" text-center text-lg max-w-md text-gray-400  ">
              Sociedad enfocada en la planeación, organización y desarrollo de
              proyectos con caracter social
            </p>
            {/* <h2 tw=" text-3xl font-semibold ">Contacto</h2> */}
            <a
              href="mailto:hola@tehuan.org"
              tw=" text-2xl text-center font-medium transition-all hover:underline hover:text-cyan-300"
            >
              <h3>hola@tehuan.org</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {},
  };
};

export default Home;
