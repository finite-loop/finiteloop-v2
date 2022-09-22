export default {
  type: "object",
  name: "eventMember",
  title: "Event Member",
  fields: [
    {
      title: "Person",
      name: "person",
      type: "reference",
      to: { type: "person" }
    },
    {
      title: "Roles",
      name: "roles",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "radio",
        list: [{ title: "Vocal", value: "vocal" }]
      }
    },
    {
      title: "School",
      name: "school",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "radio",
        list: [{ title: "Inchara School of Music", value: "Inchara-School-of-Music" }]
      }
    }
  ],
  preview: {
    select: {
      personName: "person.name",
      roles: "roles",
      media: "person.image"
    },
    prepare(data) {
      return {
        ...data,
        title: data.personName,
        subtitle: data.roles && data.roles.join("/")
      };
    }
  }
};
