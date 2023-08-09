import type { MantineThemeOverride } from '@mantine/core';

// import { ButtonStylesParams } from '@mantine/core';

export const mantineTheme: MantineThemeOverride = {
  colorScheme: 'light',
  fontFamily: '-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  defaultRadius: 5,
  components: {
    Button: {
      defaultProps: { size: 'md', color: 'blue', radius: 8 },
    },
    Table: { defaultProps: { fontSize: 'md' } },
    Modal: { defaultProps: { radius: 'md' } },
  },
  globalStyles: (theme) => ({
    '.mantine-Input-input,.mantine-DateTimePicker-input,.mantine-DatePicker-input': { borderColor: theme.colors.gray[2] },
    '.mantine-Input-invalid,.mantine-DateTimePicker-invalid,.mantine-DatePicker-invalid': { borderColor: theme.colors.red[5] },
    body: { color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7] },
  }),
};
