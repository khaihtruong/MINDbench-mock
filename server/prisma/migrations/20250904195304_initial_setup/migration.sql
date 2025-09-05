-- CreateTable
CREATE TABLE `Models` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `android` INTEGER NOT NULL,
    `ios` INTEGER NOT NULL,
    `web` INTEGER NOT NULL,
    `free` INTEGER NOT NULL,
    `monthly` VARCHAR(191) NOT NULL,
    `annual` VARCHAR(191) NOT NULL,
    `best` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
