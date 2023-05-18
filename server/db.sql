--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Homebrew)
-- Dumped by pg_dump version 14.7 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: avatars; Type: TABLE; Schema: public; Owner: tpl522_11
--

CREATE TABLE public.avatars (
    avatar_id integer NOT NULL,
    hair text NOT NULL,
    eyes text NOT NULL,
    mouth text NOT NULL,
    skin text NOT NULL,
    hair_color text NOT NULL
);


ALTER TABLE public.avatars OWNER TO tpl522_11;

--
-- Name: avatars_avatar_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_11
--

ALTER TABLE public.avatars ALTER COLUMN avatar_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.avatars_avatar_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: loves; Type: TABLE; Schema: public; Owner: tpl522_11
--

CREATE TABLE public.loves (
    love_id integer NOT NULL,
    love_name character varying(255) NOT NULL,
    is_family boolean NOT NULL,
    love_met text NOT NULL,
    love_birthday date NOT NULL,
    love_flower text NOT NULL,
    love_color text NOT NULL,
    love_cake text NOT NULL,
    user_id integer,
    avatar_id integer
);


ALTER TABLE public.loves OWNER TO tpl522_11;

--
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_11
--

CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.students_id_seq OWNER TO tpl522_11;

--
-- Name: students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_11
--

ALTER SEQUENCE public.students_id_seq OWNED BY public.loves.love_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl522_11
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    user_name text NOT NULL,
    user_email text NOT NULL,
    avatar_id integer
);


ALTER TABLE public.users OWNER TO tpl522_11;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_11
--

ALTER TABLE public.users ALTER COLUMN user_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: loves love_id; Type: DEFAULT; Schema: public; Owner: tpl522_11
--

ALTER TABLE ONLY public.loves ALTER COLUMN love_id SET DEFAULT nextval('public.students_id_seq'::regclass);


--
-- Data for Name: avatars; Type: TABLE DATA; Schema: public; Owner: tpl522_11
--

INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (12, 'long09', 'variant23', 'variant06', 'FFE0BD', 'ac6511');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (1, 'long12', 'variant26', 'variant30', 'BF9169', '0e0e0e');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (4, 'long09', 'variant01', 'variant01', 'FFCD94', '562306');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (13, 'short01', 'variant23', 'variant29', 'EEBB99', '0e0e0e');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (16, 'short01', 'variant24', 'variant16', 'ecad80', '6a4e35');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (14, 'short12', 'variant10', 'variant01', 'BF9169', '0e0e0e');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (15, 'short16', 'variant01', 'variant01', 'BF9169', '0e0e0e');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (21, 'long17', 'variant23', 'variant30', 'ecad80', 'dba3be');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (20, 'long23', 'variant22', 'variant28', '9F7967', '0e0e0e');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (22, 'short13', 'variant01', 'variant01', 'BF9169', '0e0e0e');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (27, 'long25', 'variant01', 'variant01', '503335', 'b9a05f');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (25, 'long25', 'variant01', 'variant01', '503335', '0e0e0e');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (26, 'long25', 'variant01', 'variant01', '503335', '0e0e0e');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (24, 'long16', 'variant01', 'variant01', 'BF9169', '0e0e0e');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (28, 'short01', 'variant01', 'variant01', 'BF9169', '8C644D');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (29, 'long25', 'variant21', 'variant01', 'BF9169', 'cb6820');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (30, 'short14', 'variant01', 'variant01', 'BF9169', '8C644D');
INSERT INTO public.avatars (avatar_id, hair, eyes, mouth, skin, hair_color) OVERRIDING SYSTEM VALUE VALUES (31, 'short14', 'variant01', 'variant01', 'BF9169', '8C644D');


--
-- Data for Name: loves; Type: TABLE DATA; Schema: public; Owner: tpl522_11
--

INSERT INTO public.loves (love_id, love_name, is_family, love_met, love_birthday, love_flower, love_color, love_cake, user_id, avatar_id) VALUES (5, 'Ruby', false, '2023', '2023-05-03', 'rose', 'blue', 'vanilla', 1, 4);
INSERT INTO public.loves (love_id, love_name, is_family, love_met, love_birthday, love_flower, love_color, love_cake, user_id, avatar_id) VALUES (24, 'Sarah', false, '20202', '2023-05-17', 'Rose', 'ssd', 'sds', NULL, 12);
INSERT INTO public.loves (love_id, love_name, is_family, love_met, love_birthday, love_flower, love_color, love_cake, user_id, avatar_id) VALUES (25, 'Sabry', false, '2023', '2023-06-22', 'N/A', 'blue', 'tres leches ', NULL, 13);
INSERT INTO public.loves (love_id, love_name, is_family, love_met, love_birthday, love_flower, love_color, love_cake, user_id, avatar_id) VALUES (28, 'Vladmir', false, '2023', '2023-05-10', 'unknown', 'blue?', 'not sure', NULL, 16);
INSERT INTO public.loves (love_id, love_name, is_family, love_met, love_birthday, love_flower, love_color, love_cake, user_id, avatar_id) VALUES (29, 'TEST', true, 'sdssd', '2023-05-31', 'sdfs', 'ffssf', 'sfsf', NULL, 20);
INSERT INTO public.loves (love_id, love_name, is_family, love_met, love_birthday, love_flower, love_color, love_cake, user_id, avatar_id) VALUES (30, 'Gisselle', false, '2022', '2023-05-16', 'Tulips', 'Purple', 'Carrot', NULL, 21);
INSERT INTO public.loves (love_id, love_name, is_family, love_met, love_birthday, love_flower, love_color, love_cake, user_id, avatar_id) VALUES (32, 'TEST', false, 'sd', '2023-05-17', 'j', 'ssd', 'sds', NULL, 24);
INSERT INTO public.loves (love_id, love_name, is_family, love_met, love_birthday, love_flower, love_color, love_cake, user_id, avatar_id) VALUES (37, 'TEST123', true, '2022', '2023-05-03', 'sdds', 'dsdd', 'dsds', NULL, 29);
INSERT INTO public.loves (love_id, love_name, is_family, love_met, love_birthday, love_flower, love_color, love_cake, user_id, avatar_id) VALUES (38, 'User', false, 'sfdsfs', '2023-05-24', 'ssds', 'kjb', 'carrot', NULL, 30);
INSERT INTO public.loves (love_id, love_name, is_family, love_met, love_birthday, love_flower, love_color, love_cake, user_id, avatar_id) VALUES (39, 'User', false, 'sfdsfs', '2023-05-24', 'ssds', 'kjb', 'carrot', NULL, 31);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl522_11
--

INSERT INTO public.users (user_id, user_name, user_email, avatar_id) OVERRIDING SYSTEM VALUE VALUES (1, 'Sarah ', 'sar_berry@hotmail.com', NULL);


--
-- Name: avatars_avatar_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_11
--

SELECT pg_catalog.setval('public.avatars_avatar_id_seq', 31, true);


--
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_11
--

SELECT pg_catalog.setval('public.students_id_seq', 39, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_11
--

SELECT pg_catalog.setval('public.users_user_id_seq', 1, true);


--
-- Name: avatars avatars_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_11
--

ALTER TABLE ONLY public.avatars
    ADD CONSTRAINT avatars_pkey PRIMARY KEY (avatar_id);


--
-- Name: loves students_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_11
--

ALTER TABLE ONLY public.loves
    ADD CONSTRAINT students_pkey PRIMARY KEY (love_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_11
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: loves loves_avatar_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_11
--

ALTER TABLE ONLY public.loves
    ADD CONSTRAINT loves_avatar_id_fkey FOREIGN KEY (avatar_id) REFERENCES public.avatars(avatar_id);


--
-- Name: loves loves_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_11
--

ALTER TABLE ONLY public.loves
    ADD CONSTRAINT loves_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- Name: users users_avatar_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_11
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_avatar_id_fkey FOREIGN KEY (avatar_id) REFERENCES public.avatars(avatar_id);


--
-- PostgreSQL database dump complete
--

