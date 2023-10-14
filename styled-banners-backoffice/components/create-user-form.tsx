import React from 'react';
import prisma from '@styled-banners/lib/prisma';

function CreateUserForm() {
  async function createUser(formData: FormData) {
    'use server';

    const user = await prisma.user.create({
      data: {
        twitch_channel_id: formData.get('twitch_channel_id') as string,
        twitch_opaque_user_id: formData.get('twitch_opaque_user_id') as string,
        twitch_user_id: formData.get('twitch_user_id') as string,
        twitch_role: formData.get('twitch_role') as string,
      }
    });

    console.log(user);
  }

  return (
    <form action={createUser}>
      <input type="text" name="twitch_channel_id" placeholder="twitch_channel_id" />
      <input type="text" name="twitch_opaque_user_id" placeholder="twitch_opaque_user_id" />
      <input type="text" name="twitch_user_id" placeholder="twitch_user_id" />
      <input type="text" name="twitch_role" placeholder="twitch_role" />
      <button>Salvar usuário</button>
    </form>
  );
}

export default CreateUserForm;