CREATE TABLE profiles (
  id uuid default gen_random_uuid() primary key,
  wallet_address text unique,
  full_name text not null,
  email text unique not null,
  password_hash text not null,
  role text check (role in ('freelancer', 'perusahaan')) not null,
  specialization text,
  avatar_url text,
  rating numeric default 0,
  created_at timestamp with time zone default now()
);

CREATE TABLE digital_products (
  id uuid default gen_random_uuid() primary key,
  seller_id uuid references profiles(id),
  title text not null,
  price numeric not null,
  price_currency text default 'Rp',
  image_url text,
  category text
);

CREATE TABLE jobs (
  id uuid default gen_random_uuid() primary key,
  employer_id uuid references profiles(id),
  title text not null,
  company_name text,
  location text,
  salary_min numeric,
  salary_max numeric,
  work_type text,
  status text default 'open'
);

CREATE TABLE smart_contracts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id),
  contract_address text not null,
  balance_eth numeric default 0,
  balance_idr numeric default 0,
  active_contracts int default 0,
  completed_contracts int default 0,
  total_value_eth numeric default 0
);
