import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import { Store, User } from '../model';

function load<T>(file: string) : T {
  const filePath = path.resolve(process.cwd(), `data/${file}.yml`);
  console.log(filePath);
  const text = fs.readFileSync(filePath, 'utf8');
  const data = yaml.safeLoad(text);
  return data as any as T;
}

export function getUsers() : User[] {
  let data = load<Store>('data1');
  return data.users;
}