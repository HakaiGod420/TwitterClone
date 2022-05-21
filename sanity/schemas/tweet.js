export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in the tweet',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title:  'Block Tweet',
      description: 'Admin controls: Toggle if tweet is deemed wrong',
      type: 'boolean',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    }
  ],

 
}
