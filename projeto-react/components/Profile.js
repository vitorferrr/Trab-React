export default function Profile({size = 200}) {
  return (
    <div className="flex flex-col items-center text-center">
      <img 
        src="https://media.licdn.com/dms/image/v2/D4D03AQGtKejMt85GHQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727647494822?e=1774483200&v=beta&t=pYZzgE_F1VoxSt3tTJRrzC9_MX2Ochq5IxNlAvfZvgg"
        alt="Vitor Ferreira" 
        width={size} 
        height={size}
      />

      <h2>
        Vitor dos Santos Ferreira
      </h2>

      <p>
        Estudante de Sistemas para Internet na UNICAP. Estou aprendendo React/NextJS.
      </p>
    </div>
  )
}
