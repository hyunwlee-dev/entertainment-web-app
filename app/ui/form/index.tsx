import { FormHTMLAttributes, InputHTMLAttributes, forwardRef } from "react";
import {
  FormProvider,
  RegisterOptions,
  useForm,
  useFormContext,
  SubmitHandler,
  FieldValues,
  ChangeHandler,
} from 'react-hook-form';
import clsx from "clsx";

interface UseFormProps<T extends FieldValues> extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  onSubmit: SubmitHandler<T>;
}

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'pattern'> {
  label: string;
  labelSrOnly?: boolean;
  field: string;
  onChange?: ChangeHandler;
  options?: RegisterOptions;
};

export function Form<T extends FieldValues>({
  onSubmit,
  children,
  className,
  ...props
}: UseFormProps<T>) {
  const methods = useForm<T>();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={className}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  labelSrOnly = false,
  field,
  options,
  className,
  ...props
}, reference) => {
  const { register, formState: { errors } } = useFormContext();
  const { ref, ...rest } = register(field, options);
  return (
    <div className={clsx(className)}>
      <label
        htmlFor={field}>
        {label}
      </label>
      <input
        ref={(e) => {
          ref(e);
          if (!reference)
            return;
          if (typeof reference === 'function') {
            reference(e);
            return;
          }
          reference.current = e;
        }}
        id={field}
        {...rest}
        {...props}
      />
      {errors[field]?.message && (
        <span>
          {errors[field]?.message as string}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';
Form.Input = Input;
