import { useState } from "react"
import { RegisterForm } from "../RegisterForm"

import { z } from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const signInFormSchema = z.object({
    email: z.string()
    .nonempty('O endereço de e-mail é obrigatório.')
    .email('Entrada inválida. Informe um endereço de e-mail válido. Por exemplo, john@doe.com'),
    password: z.string().nonempty('A senha é obrigatória.')
})

type signInFormData = z.infer<typeof signInFormSchema>

export const LoginForm = () => {
    const [registerFrameIsOpen, setRegisterFrameIsOpen] = useState<boolean>(false)

    const { 
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm<signInFormData>({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onBlur',
        resolver: zodResolver(signInFormSchema)
    })

    async function handleSignIn(data: signInFormData) {
        await fetch('http://localhost:3333/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    if (registerFrameIsOpen) {
        return <RegisterForm onBackToLogin={() => setRegisterFrameIsOpen(false)} />
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleSignIn)}>
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded border-black text-black"
                    {...register('email')}
                />
                {errors?.email && <p className="text-red-500 text-xs">{errors?.email?.message}</p>}

                <input
                    type="password"
                    placeholder="Senha"
                    className="border p-2 rounded border-black text-black"
                    {...register('password')}
                />
                {errors?.password && <p className="text-red-500 text-xs">{errors?.password?.message}</p>}

                <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700" disabled={isSubmitting}>
                    Entrar
                </button>
            </form>

            <button
                onClick={() => setRegisterFrameIsOpen(true)}
                className="mt-4 text-sm text-blue-600 hover:underline"
            >
                Não possui conta ainda? Cadastre-se!
            </button>
        </div>
    )
}
