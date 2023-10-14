-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "twitch_channel_id" TEXT NOT NULL,
    "twitch_opaque_user_id" TEXT NOT NULL,
    "twitch_user_id" TEXT NOT NULL,
    "twitch_role" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Banner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "cta_url" TEXT NOT NULL,
    "cta_text" TEXT NOT NULL,
    "twitch_extension_name" TEXT NOT NULL,
    CONSTRAINT "Banner_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
