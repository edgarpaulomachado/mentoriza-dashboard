'use client';

import { useSearchParams } from 'next/navigation';

export default function ResetPasswordClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  return (
    <div>
      <h1>Redefinir palavra-passe</h1>

      {!token ? (
        <p>Token inválido ou inexistente</p>
      ) : (
        <form>
          <input type="password" placeholder="Nova palavra-passe" />
          <button type="submit">Confirmar</button>
        </form>
      )}
    </div>
  );
}
