interface IButton {
  label: string;
}

export interface IHeroBanner {
  button: IButton;
  image: string;
  content: string;
  title: string;
}

interface IFeature {
  content: string;
  icon?: string;
}

export interface ISharedIndex {
  image: string;
  desc: string;
  title: string;
  features: IFeature[];
}

export interface IToolsTogether {
  title: string;
  image: string;
  features: IFeature[];
}

export interface ISharedEmail {
  title: string;
  desc: string;
  image: string;
  features: IFeature[];
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
  sharedIndex: ISharedIndex;
  toolsTogether: IToolsTogether;
  sharedEmail: ISharedEmail;
  recentCustomer: IRecentCustomer;
  plartform: IPlartform;
}
