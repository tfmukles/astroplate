import Footer from "@/components/fotter";
import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import Paltform from "@/components/palartform";
import RecentCustomer from "@/components/recent-customer";
import SharedEmail from "@/components/shared-email";
import SharedInbox from "@/components/shared-inbox";
import ToolTogether from "@/components/tooltogether";
import { getPageData } from "@/lib/contentParser";
import { IData } from "@/types";

interface Props {
  data: IData;
}

export default function Home({ data }: Props) {
  const {
    heroBanner,
    sharedIndex,
    toolsTogether,
    sharedEmail,
    plartform,
    recentCustomer,
  } = data;

  return (
    <>
      <Header />
      <HeroBanner heroBanner={heroBanner} />
      <SharedInbox sharedIndex={sharedIndex} />
      <ToolTogether toolsTogether={toolsTogether} />
      <SharedEmail sharedEmail={sharedEmail} />
      <RecentCustomer recentCustomer={recentCustomer} />
      <Paltform plartform={plartform} />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const homePage = await getPageData("content/index.md");
  return {
    props: { ...homePage },
  };
};
