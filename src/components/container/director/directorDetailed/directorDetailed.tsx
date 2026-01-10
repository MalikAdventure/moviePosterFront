import type { FC } from 'react';

import avatarImg from '@/assets/tempImgs/avatar.png';

const DirectorDetailed: FC = () => {
  return (
    <>
      <h2 className='font-bold text-3xl text-white mb-5'>Режиссёр</h2>
      <div className='flex justify-between mb-20'>
        <div className='bg-neutral-300 w-70 h-70 rounded-xl p-2'>
          <img src={avatarImg} alt='poster' className='w-70 h-65' />
        </div>
        <div className='bg-neutral-300 w-4/5 rounded-xl p-5 flex flex-col gap-5'>
          <div className='flex'>
            <h2 className='font-bold text-2xl w-1/4'>Имя режиссёра</h2>
            <p className='font-bold text-1xl w-3/4'>Фамилия Имя Отчество</p>
          </div>
          <hr className='w-9/10 mx-auto border-t-2' />
          <div className='flex'>
            <h2 className='font-bold text-2xl w-1/4'>Биография</h2>
            <p className='text-1xl w-3/4'>
              Вот вам яркий пример современных тенденций — сплочённость команды
              профессионалов способствует подготовке и реализации приоретизации
              разума над эмоциями. Современные технологии достигли такого
              уровня, что высокое качество позиционных исследований в
              значительной степени обусловливает важность системы массового
              участия. Кстати, сделанные на базе интернет-аналитики выводы,
              которые представляют собой яркий пример
              континентально-европейского типа политической культуры, будут
              разоблачены. Как уже неоднократно упомянуто, явные признаки победы
              институционализации неоднозначны и будут в равной степени
              предоставлены сами себе. В целом, конечно, начало повседневной
              работы по формированию позиции требует определения и уточнения
              системы массового участия. Задача организации, в особенности же
              выбранный нами инновационный путь предоставляет широкие
              возможности для дальнейших направлений развития! И нет сомнений,
              что акционеры крупнейших компаний, превозмогая сложившуюся
              непростую экономическую ситуацию, указаны как претенденты на роль
              ключевых факторов. Есть над чем задуматься: ключевые особенности
              структуры проекта обнародованы.
            </p>
          </div>
          <hr className='w-9/10 mx-auto border-t-2 ' />
          <div className='flex'>
            <h2 className='font-bold text-2xl w-1/4'>Страна рождения</h2>
            <p className='font-bold text-1xl text-blue-500 w-3/4'>США</p>
          </div>
          <hr className='w-9/10 mx-auto border-t-2' />
          <div className='flex'>
            <h2 className='font-bold text-2xl w-1/4'>Возраст</h2>
            <p className='font-bold text-1xl w-3/4'>23 года</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectorDetailed;
