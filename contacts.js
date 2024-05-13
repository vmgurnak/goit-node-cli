// У файл `contacts.js` зроби імпорт модулів `fs` (у версії, яка працює з промісами - `fs/promises`) і `path` для роботи з файловою системою.

import * as fs from 'fs/promises';
import path from 'node:path';

// import crypto from 'node:crypto';

// Створи змінну `contactsPath` і запиши в неї шлях до файлу `contacts.json`. Для складання шляху використовуй методи модуля `path`

const contactsPath = path.resolve('db', 'contacts.json');

// - Додай асинхронні функції для роботи з колекцією контактів. У функціях використовуй модуль `fs` та його методи `readFile()` і `writeFile()`. Відповідні функції мають повертати необхідні дані за допомогою оператора return. Вивід в консоль в написаних функціях здійснюватись не повинен.
// - Зроби експорт створених функцій.

async function listContacts() {
  const data = await fs.readFile(contactsPath, { encoding: 'utf-8' });
  const contacts = JSON.parse(data);
  return contacts;
}
