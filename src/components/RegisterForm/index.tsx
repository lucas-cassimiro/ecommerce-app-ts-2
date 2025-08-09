import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const signUpFormSchema = z.object({
    firstName: z.string().nonempty('Campo obrigatório').regex(/^[A-Za-z]+$/i, "Somente letras são permitidas."),
    lastName: z.string().nonempty('Campo obrigatório').regex(/^[A-Za-z]+$/i, "Somente letras são permitidas."),
    email: z.string().nonempty('Campo obrigatório').email('Informe um endereço de e-mail válido.'),
    password: z.string().nonempty('A senha é obrigatória').min(6, 'Verifique se a sua senha tem pelo menos 6 caracteres.'),
    confirmPassword: z.string().nonempty('Informe a senha novamente.'),
    cellphone: z.string().nonempty('Campo obrigatório')
}).refine(
    ({ password, confirmPassword }) => password === confirmPassword,
    {
        message: 'As senhas informadas não correspondem. Tente novamente.',
        path: ['confirmPassword']
    }
)

type signUpFormData = z.infer<typeof signUpFormSchema>

interface RegisterFormProps {
    onBackToLogin: () => void
}

export const RegisterForm = ({ onBackToLogin }: RegisterFormProps) => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm<signUpFormData>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            cellphone: ''
        },
        mode: 'onBlur',
        resolver: zodResolver(signUpFormSchema)
    })

    async function handleSignUp(data: signUpFormData) {
        await fetch('http://localhost:3333/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <div>
            <button
                onClick={onBackToLogin}
                className="text-sm text-blue-600 hover:underline mb-4"
            >
                ← Voltar para o Login
            </button>

            <h2 className="text-xl font-bold mb-4">Cadastro</h2>
            <form className="flex flex-col" onSubmit={handleSubmit(handleSignUp)}>
                <label htmlFor="firstName" className="text-black">Nome</label>
                <input type="text" placeholder="Nome" id="firstName" className="border p-2 rounded border-black mb-4 text-black" {...register('firstName')} />
                {errors?.firstName && <p className='text-red-500 text-xs'>{errors?.firstName?.message}</p>}

                <label htmlFor="lastName" className="text-black">Sobrenome</label>
                <input type="text" placeholder="Nome" id="lastName" className="border p-2 rounded border-black mb-4 text-black" {...register('lastName')} />
                {errors?.lastName && <p className='text-red-500 text-xs'>{errors?.lastName?.message}</p>}


                <label htmlFor="email" className="text-black">Email</label>
                <input type="email" placeholder="Email" id="email" className="border p-2 rounded border-black mb-4 text-black" {...register('email')} />
                {errors?.email && <p className='text-red-500 text-xs'>{errors?.email?.message}</p>}

                <label htmlFor="password" className="text-black">Senha</label>
                <input type="password" placeholder="Senha" id="password" className="border p-2 rounded border-black mb-4 text-black" {...register('password')} />
                {errors?.password && <p className='text-red-500 text-xs'>{errors?.password?.message}</p>}

                <label htmlFor="confirmPassword" className="text-black">Confirme sua senha</label>
                <input type="password" placeholder="Nome" id="confirmPassword" className="border p-2 rounded border-black mb-4 text-black" {...register('confirmPassword')} />
                {errors?.confirmPassword && <p className='text-red-500 text-xs'>{errors?.confirmPassword?.message}</p>}

                <label htmlFor="cellphone" className="text-black">Celular</label>
                <input type="text" placeholder="Nome" id="cellphone" className="border p-2 rounded border-black mb-4 text-black" {...register('cellphone')} />
                {errors?.cellphone && <p className='text-red-500 text-xs'>{errors?.cellphone?.message}</p>}

                <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700" disabled={isSubmitting}>
                    Cadastrar
                </button>
            </form>
        </div>
    )
}
