import { defineField, defineType } from '@sanity/types';

export default defineType({
  name: 'board',
  title: 'Board',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        list: [
          { title: 'SEE', value: 'see' },
          { title: 'NEB', value: 'neb' },
          { title: 'IOE', value: 'ioe' },
          { title: 'IOM', value: 'iom' },
          { title: 'Loksewa', value: 'loksewa' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});