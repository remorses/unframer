import { test, expect } from 'vitest';
import { createClient } from './client';
import { env, supabaseRef } from './env';
import { createSupabaseAdmin, createSupabaseAnon } from './supabase.server';
import { db } from 'db/kysely';
test('hono client', async () => {
    const admin = createSupabaseAdmin();
    const email = 'test@example.com';
    const password = 'xxpasswordxx99776';
    const { error: signupError } = await admin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
    });
    // expect(signupError).toBe(null)
    const supabase = createSupabaseAnon();
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    expect(error).toBe(null);
    const session = data.session;
    const client = createClient({
        url: `http://localhost:${env.PORT}`,
        session,
        supabaseRef,
    });
    const res = await client.api.v1.health.$get({});
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toMatchInlineSnapshot(`
      {
        "ok": true,
      }
    `);
});
test('get conversations with my account', async () => {
    const admin = createSupabaseAdmin();
    const email = 'beats.by.morse@gmail.com';
    const password = env.CRISP_WEBHOOKS_SECRET;
    const user = await db
        .selectFrom('auth.users')
        .selectAll()
        .where('email', '=', email)
        .executeTakeFirst();
    // uncomment this to set the password the first time
    // const { error: signupError } = await admin.auth.admin.updateUserById(
    //     user!.id,
    //     { password },
    // )
    // expect(signupError).toBe(null)
    const supabase = createSupabaseAnon();
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    expect(error).toBe(null);
    const session = data.session;
    const client = createClient({
        url: `http://localhost:${env.PORT}`,
        session,
        supabaseRef,
    });
    const res = await client.api.v1.conversations.$get({});
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.conversations.length).toBeGreaterThan(0);
    console.log(json.conversations);
});
