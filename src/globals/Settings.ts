import type { GlobalConfig } from 'payload/types';
import { admins } from '../collections/access/admins';

export const Settings: GlobalConfig = {
  slug: 'settings',
  typescript: {
    interface: 'GeneralSettings',
  },
  graphQL: {
    name: 'Settings',
  },
  access: {
    read: () => true,
    update: admins,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          description: 'This will appear within the tab above the fields.',
          fields: [
            {
              name: 'novu',
              type: 'group',
              label: 'Novu',
              fields: [
                {
                  name: 'apiKey',
                  type: 'text',
                  label: 'API key',
                },
              ],
            },
            {
              name: 'googleMapsApiKey',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          label: 'Payment',
          fields: [
            {
              name: 'channelId',
              type: 'text',
              access: {
                read: admins,
                update: admins
              },
            },
            {
              name: 'checksumKey',
              type: 'text',
              access: {
                read: admins,
                update: admins
              }
            },
            {
              name: 'apiKey',
              type: 'text',
              access: {
                read: admins,
                update: admins
              }
            },
            {
              name: 'paymentApi',
              type: 'text',
              access: {
                read: admins,
                update: admins
              }
            },
          ],
        }
      ],
    },
  ],
};
