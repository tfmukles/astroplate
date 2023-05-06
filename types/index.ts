interface IButton {
  label: string;
}

export interface IBanner {
  button: IButton;
  image: string;
  content: string;
  title: string;
}

interface ICustomer {
  comment: string;
  img: string;
  name: string;
  designation: string;
}

export interface ITestimonial {
  title: string;
  desc: string;
  comments: ICustomer[];
}

export interface IPlartform {
  title: string;
  desc: string;
  image: string;
  button: { label: string };
}

export interface IData {
  banner: IBanner;
  services: {
    title: string;
    desc?: string;
    features: string[];
    image: string;
  }[];
  testimonial: ITestimonial;
  plartform: IPlartform;
}
