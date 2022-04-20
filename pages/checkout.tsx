import { SubmitHandler, useForm } from "react-hook-form";
import PrimaryButton from "../components/buttons/PrimaryButton";
import FormErrorMsg from "../components/forms/FormErrorMsg";
import Input from "../components/forms/Input";
import TextArea from "../components/forms/TextArea";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setLocale } from "yup";
import CheckoutOrderSummary from "../components/checkout/CheckoutOrderSummary";
import { useCartState } from "../components/cart/cartContext";
import { apolloClient } from "../graphql/apolloClient";
import {
  CreateNewOrderDocument,
  CreateNewOrderMutation,
  CreateNewOrderMutationVariables,
  InputMaybe,
} from "../generated/graphql";
import CheckoutConfirmation from "../components/checkout/OrderConfirmation";

setLocale({
  mixed: {
    required: "To pole jest wymagane",
  },
  string: {
    email: "Podaj poprawny adres email",
  },
});

const checkoutFormSchema = yup
  .object({
    firstName: yup.string().trim().required(),
    lastName: yup.string().trim().required(),
    email: yup.string().trim().email().required(),
    address: yup.string().trim().required(),
    city: yup.string().trim().required(),
    postCode: yup.string().trim().required(),
    notes: yup.string().trim(),
  })
  .required();

export type CheckoutFormData = yup.InferType<typeof checkoutFormSchema>;

const CheckoutPage = () => {
  const { items } = useCartState();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<CheckoutFormData>({
    resolver: yupResolver(checkoutFormSchema),
  });
  const onSubmit: SubmitHandler<CheckoutFormData> = async (data) => {
    const result = await apolloClient.mutate<
      CreateNewOrderMutation,
      CreateNewOrderMutationVariables
    >({
      mutation: CreateNewOrderDocument,
      variables: {
        order: {
          email: data.email,
          total: items.length,
          stripeCheckoutId: "123",
          orderItems: {
            create: items.map((item) => {
              return {
                quantity: item.count,
                total: item.price * item.count,
                product: { connect: { slug: item.id as InputMaybe<string> } },
              };
            }),
          },
        },
      },
    });
    console.log(result);
    items.length = 0;
    localStorage.clear();
    reset();
  };

  return (
    <div className="w-11/12 mx-auto my-8">
      {isSubmitSuccessful ? (
        <CheckoutConfirmation />
      ) : (
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="grid justify-center w-full grid-cols-1 gap-8 mx-auto md:grid-cols-2"
        >
          <div className="col-start-1 ">
            <h2 className="mb-8 text-lg font-bold">Dane Zamawiającego</h2>
            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <Input
                  {...register("firstName")}
                  labelText="Imię"
                  labelFor="firstName"
                  type="text"
                />
                {errors.firstName && errors.firstName.message && (
                  <FormErrorMsg text={errors.firstName.message} />
                )}
              </div>
              <div className="w-full lg:w-1/2">
                <Input
                  {...register("lastName")}
                  labelText="Nazwisko"
                  labelFor="lastName"
                  type="text"
                />
                {errors.lastName && errors.lastName.message && (
                  <FormErrorMsg text={errors.lastName.message} />
                )}
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full">
                <Input
                  {...register("email")}
                  labelText="Adres email"
                  labelFor="email"
                  type="email"
                />

                {errors.email && errors.email.message && (
                  <FormErrorMsg text={errors.email.message} />
                )}
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full">
                <TextArea
                  {...register("address")}
                  labelText={"Adres"}
                  labelFor={"address"}
                  placeholder={"Ulica, numer domu, numer mieszkania"}
                />
                {errors.address && errors.address.message && (
                  <FormErrorMsg text={errors.address.message} />
                )}
              </div>
            </div>
            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <Input
                  {...register("city")}
                  labelText={"Miasto"}
                  labelFor={"city"}
                  type={"text"}
                />
                {errors.city && errors.city.message && (
                  <FormErrorMsg text={errors.city.message} />
                )}
              </div>
              <div className="w-full lg:w-1/2 ">
                <Input
                  {...register("postCode")}
                  labelText={"Kod pocztowy"}
                  labelFor={"postCode"}
                  type={"text"}
                />
                {errors.postCode && errors.postCode.message && (
                  <FormErrorMsg text={errors.postCode.message} />
                )}
              </div>
            </div>
            <div className="flex items-center mt-4">
              <label className="flex items-center text-sm group text-heading">
                <input
                  type="checkbox"
                  className="w-5 h-5 border border-neutral-500 focus:outline-none focus:ring-2"
                />
                <span className="ml-2">
                  Save this information for next time
                </span>
              </label>
            </div>
            <div className="relative pt-3 xl:pt-6">
              <TextArea
                {...register("notes")}
                labelText={"Wiadomość (opcjonalnie)"}
                labelFor={"notes"}
                placeholder={"Wiadomość do sprzedawcy"}
              />
            </div>
          </div>
          <div className="col-start-1 md:col-start-2">
            <h2 className="mb-8 text-lg font-bold">Twoje zamówienie</h2>
            <CheckoutOrderSummary />
            <div className="mt-4">
              <PrimaryButton disabled={isSubmitting}>
                {isSubmitting ? "Wysyłanie" : "Kontynuuj"}
              </PrimaryButton>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckoutPage;
