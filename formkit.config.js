import { generateClasses } from "@formkit/themes"
import {es} from '@formkit/i18n'

const config = {
   locales:{es},
   locale: 'es',
   config:{
      classes: generateClasses({
         global:{
            label: "text-lg block font-bold text-gray-700",
            input: "p-3 border border-gray-300 rounded-md shadow-sm w-full focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50",
            message: "text-red-500 mb-5",
            wrapper: "space-y-2 mb-3",
          },
          file:{
            noFiles: "block my-2",
            fileItem: "hidden",
          },
         submit:{
            input: '$reset bg-indigo-800 hover:bg-indigo-700 text-white font-bold p-2 rounded w-full uppercase',
         }
      }),
   }
}

export default config