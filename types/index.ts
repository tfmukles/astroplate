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

export interface ICta {
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
    service_list: string[];
    image: string;
  }[];
  testimonial: ITestimonial;
  cta: ICta;
}
