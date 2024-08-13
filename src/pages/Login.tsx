//import { supabase } from "@/api/supabase.condfig";
import { FormInput } from "@/components/core/forms/FormInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({
    message: "Debe ingresar un email válido.",
  }),
  password: z.string(),
});

type IForm = z.infer<typeof formSchema>;

export function Login() {
  const navigate = useNavigate();

  const form = useForm<IForm>({
    resolver: zodResolver(formSchema),
  });

  const { formState } = form;

  const onSubmit = async () =>
    //data: IForm
    {
      // const { email, password } = data;
      try {
        // const { data } = await supabase.auth.signUp({ email, password });
        // console.log(data)
        // const isAuth = true;

        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    };

  console.log(formState);

  return (
    <section className=" mx-auto flex items-center justify-center h-screen ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="mx-auto max-w-md min-w-96">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Ingrese con su correo o cuenta de google
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <FormInput
                    control={form.control}
                    label="Email"
                    name="email"
                    placeholder="@gmail.com"
                    type="email"
                  />
                </div>
                <div className="grid gap-2">
                  <FormInput
                    control={form.control}
                    label="Contraseña"
                    name="password"
                    placeholder="*********"
                    type="password"
                  />
                </div>
                <Button type="submit" className="w-full">
                  {formState.isSubmitSuccessful ? (
                    <Loader2 className="animate-spin " />
                  ) : (
                    <span>Login</span>
                  )}
                </Button>
                <Button variant="outline" className="w-full">
                  Login con Google
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                No tienes una cuenta?{" "}
                <a href="#" className="underline">
                  Crear cuenta
                </a>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </section>
  );
}
