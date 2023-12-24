'use server';

import { redirect } from 'next/navigation';
import { prisma } from 'database';

export const deleteNoteAndRedirect = async (noteId: string) => {
  await prisma.note.delete({
    where: {
      noteId,
    },
  });

  redirect(`/notes`);
};
