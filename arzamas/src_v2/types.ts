declare global {
  interface Window {
    lmt_config: {
      product_name: string;
      product_image: string;
      offer_link: string;
      modal_shown: boolean;
      name_pattern: RegExp;
      phone_pattern: RegExp;
      form_params: object;
      validity: {
        phone_error: "";
        name_error: "";
      };
    };
  }
}
export type FormParamsKey = keyof typeof window.lmt_config.form_params;
