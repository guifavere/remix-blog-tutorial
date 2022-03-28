import { prisma } from '~/db.server';

import type { Post } from '@prisma/client';
export type { Post };

export const getPosts = () => prisma.post.findMany();

export const getPost = (slug: string) => prisma.post.findUnique({ where: { slug } });

export const createPost = async (post: Pick<Post, 'slug' | 'title' | 'markdown'>) =>
  prisma.post.create({ data: post });