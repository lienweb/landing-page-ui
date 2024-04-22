"use server"

export async function handleRandomUser() {
  const res = await fetch('https://randomuser.me/api/');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}