import { SubmitHandler, useForm } from "react-hook-form";
import PrimaryButton from "../components/buttons/PrimaryButton";
import FormErrorMsg from "../components/forms/FormErrorMsg";

import Input from "../components/forms/Input";
import TextArea from "../components/forms/TextArea";

export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postCode: string;
  notes: string;
}

const CheckoutPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();
  const onSubmit: SubmitHandler<CheckoutFormData> = (data) => console.log(data);
  return (
    <div className="grid w-11/12 grid-cols-1 mx-auto my-8 lg:grid-cols-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="justify-center w-full mx-auto"
      >
        <div className="space-x-0 lg:flex lg:space-x-4">
          <div className="w-full lg:w-1/2">
            <Input
              {...register("firstName", { required: true })}
              labelText="Imię"
              labelFor="firstName"
              type="text"
            />
            {errors.firstName && <FormErrorMsg text="To pole jest wymagane" />}
          </div>
          <div className="w-full lg:w-1/2">
            <Input
              {...register("lastName", { required: true })}
              labelText="Nazwisko"
              labelFor="lastName"
              type="text"
            />
            {errors.lastName && <FormErrorMsg text="To pole jest wymagane" />}
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full">
            <Input
              {...register("email", { required: true })}
              labelText="Adres email"
              labelFor="email"
              type="email"
            />
            {errors.email && <FormErrorMsg text="To pole jest wymagane" />}
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full">
            <TextArea
              {...register("address", { required: true })}
              labelText={"Adres"}
              labelFor={"address"}
              placeholder={"Ulica, numer domu, numer mieszkania"}
            />
            {errors.address && <FormErrorMsg text="To pole jest wymagane" />}
          </div>
        </div>
        <div className="space-x-0 lg:flex lg:space-x-4">
          <div className="w-full lg:w-1/2">
            <Input
              {...register("city", { required: true })}
              labelText={"Miasto"}
              labelFor={"city"}
              type={"text"}
            />
            {errors.city && <FormErrorMsg text="To pole jest wymagane" />}
          </div>
          <div className="w-full lg:w-1/2 ">
            <Input
              {...register("postCode", { required: true })}
              labelText={"Kod pocztowy"}
              labelFor={"postCode"}
              type={"text"}
            />
            {errors.postCode && <FormErrorMsg text="To pole jest wymagane" />}
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label className="flex items-center text-sm group text-heading">
            <input
              type="checkbox"
              className="w-5 h-5 border border-neutral-500 focus:outline-none focus:ring-2"
            />
            <span className="ml-2">Save this information for next time</span>
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
        <div className="mt-4">
          <PrimaryButton>Płacę</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
