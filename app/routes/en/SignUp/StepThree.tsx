import { TriangleAlert } from "lucide-react";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface StepThreeInterface {
  email: string;
  setEmail: (email: string) => void;
  onButtonClick: () => void;
}

interface FormInterface {
  email: string;
  password: string;
}

export default function StepThree({
  email,
  setEmail,
  onButtonClick,
}: StepThreeInterface) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInterface>();

  useEffect(() => {
    setValue("email", email);
  }, []);

  const onSubmit: SubmitHandler<FormInterface> = (data) => {
    setEmail(data.email);
    onButtonClick();
  };

  return (
    <form
      className="flex max-w-[440px] flex-1 flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {(errors.password || errors.email) && (
        <div className="flex gap-4 rounded-sm bg-yellow-600 p-2">
          <TriangleAlert fill="black" color="#d08600" />
          <span>{errors.password?.message || errors.email?.message}</span>
        </div>
      )}
      <div className="flex flex-col gap-1">
        <span className="text-sm uppercase">
          Step <b>1</b> of <b>3</b>
        </span>
        <h2>Create a password to start your membership</h2>
        <h5>
          Just a few more steps and you're done! <br /> We hate paperwork, too.
        </h5>
      </div>

      <div className="flex flex-col gap-2">
        <input
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          className="w-full rounded-sm border border-gray-400 px-2 py-4"
          placeholder="Enter your email"
        />

        <input
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 4,
              message:
                "Your password must contain between 4 and 60 characters.",
            },
            maxLength: {
              value: 60,
              message:
                "Your password must contain between 4 and 60 characters.",
            },
          })}
          type="password"
          className="w-full rounded-sm border border-gray-400 px-2 py-4"
          placeholder="Enter your password"
        />
      </div>

      <button className="w-full cursor-pointer rounded-sm bg-red-600 py-4 text-xl font-medium tracking-wide text-white">
        Next
      </button>
    </form>
  );
}
