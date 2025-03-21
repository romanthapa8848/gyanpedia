import { defineField, defineType } from '@sanity/types';

export default defineType({
  name: 'class',
  title: 'Class',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string', // You can customize this with a list if classes are fixed (e.g., Class 10, 11, 12)
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'board',
      title: 'Parent Board',
      type: 'reference',
      to: [{ type: 'board' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});