interface IButton {
  label: string;
}

export interface IHeroBanner {
  button: IButton;
  image: string;
  content: string;
  title: string;
}

interface ICustomer {
  comment: string;
  profile: string;
  name: string;
  designation: string;
}

export interface IRecentCustomer {
  title: string;
  desc: string;
  features: ICustomer[];
}

export interface IPlartform {
  title: string;
  desc: string;
  image: string;
  button: { label: string };
}

export interface IData {
  heroBanner: IHeroBanner;
  componetList: {
    title: string;
    desc?: string;
    features: string[];
    image: string;
  }[];
  recentCustomer: IRecentCustomer;
  plartform: IPlartform;
}
